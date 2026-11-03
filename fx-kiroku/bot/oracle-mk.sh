set -e
C=$OCI_TENANCY
[ -f ~/.ssh/fxkey ] || ssh-keygen -t ed25519 -N '' -f ~/.ssh/fxkey -q
AD=$(oci iam availability-domain list -c $C --query 'data[0].name' --raw-output)
echo "AD=$AD"
VCN=$(oci network vcn create -c $C --cidr-block 10.0.0.0/16 --display-name fx-vcn --wait-for-state AVAILABLE --query data.id --raw-output)
IGW=$(oci network internet-gateway create -c $C --vcn-id $VCN --is-enabled true --display-name fx-igw --wait-for-state AVAILABLE --query data.id --raw-output)
RT=$(oci network vcn get --vcn-id $VCN --query 'data."default-route-table-id"' --raw-output)
oci network route-table update --rt-id $RT --route-rules "[{\"destination\":\"0.0.0.0/0\",\"networkEntityId\":\"$IGW\"}]" --force >/dev/null
SN=$(oci network subnet create -c $C --vcn-id $VCN --cidr-block 10.0.0.0/24 --display-name fx-subnet --wait-for-state AVAILABLE --query data.id --raw-output)
echo "network ok"
IMG=$(oci compute image list -c $C --operating-system 'Canonical Ubuntu' --operating-system-version '24.04' --shape VM.Standard.E2.1.Micro --sort-by TIMECREATED --query 'data[0].id' --raw-output)
echo "IMG=$IMG"
ID=$(oci compute instance launch -c $C --availability-domain $AD --shape VM.Standard.E2.1.Micro --image-id $IMG --subnet-id $SN --assign-public-ip true --display-name fx-bot --ssh-authorized-keys-file ~/.ssh/fxkey.pub --wait-for-state RUNNING --query data.id --raw-output)
IP=$(oci compute instance list-vnics --instance-id $ID --query 'data[0]."public-ip"' --raw-output)
echo $IP > ~/fx-ip.txt
echo DONE_IP=$IP
