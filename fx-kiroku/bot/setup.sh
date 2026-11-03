#!/bin/bash
# Oracleの無料サーバー（Ubuntu）で1回だけ実行する準備
#   curl -sL https://raw.githubusercontent.com/inaba-tools/inaba-tools.github.io/main/fx-kiroku/bot/setup.sh | bash
set -e
DIR=$HOME/fx-bot
RAW=https://raw.githubusercontent.com/inaba-tools/inaba-tools.github.io/main/fx-kiroku/bot
sudo apt-get update -qq && sudo apt-get install -y -qq python3-requests >/dev/null
mkdir -p $DIR && cd $DIR
curl -sL $RAW/bot.py -o bot.py
if [ ! -f .env ]; then
  cat > .env <<'EOF'
# 1 = 練習（本物の注文は出さない）/ 0 = 本番
DRY_RUN=1
GMO_API_KEY=
GMO_API_SECRET=
SIZE_A=10000
SIZE_EU=10000
SHEET_URL=
EOF
  chmod 600 .env
fi
# 1分ごとに動かす（同じ行がなければ足す）
( crontab -l 2>/dev/null | grep -v 'fx-bot/bot.py'; echo "* * * * * cd $DIR && /usr/bin/python3 bot.py >> cron.log 2>&1" ) | crontab -
# 毎週日曜の昼に bot.py を最新にする
( crontab -l | grep -v 'fx-bot/bot.py -o'; echo "0 3 * * 0 curl -sL $RAW/bot.py -o $DIR/bot.py.new && mv $DIR/bot.py.new $DIR/bot.py" ) | crontab -
echo "準備できました（練習モードで1分ごとに動きます）。記録は $DIR/kiroku.csv、動きは $DIR/bot.log"
