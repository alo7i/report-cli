# report-cli
> Report helper.

## installation
```shell
# install by npm
npm i -g @jswork/report-cli
# uninsall
npm uninsall -g @jswork/report-cli

# private
git clone git@github.com:alo7i/report-cli.git
# git clone https://github.com/alo7i/report-cli.git
cd report-cli && npm link
```

## usage
```shell
# 当前月份/.tmp.md 文件
report-cli g
# 指定日期
report-cli g -t=2022-05-25 -f mm.dd
# 下个月的日期
report-cli g test.md -t=2022-04-25
# verbose
report-cli g -v
```

~~~
03.28 - 日志: xx
03.29 - 日志: xx
03.30 - 日志: xx
03.31 - 日志: xx
04.01 - 日志: xx
04.02 - 日志: xx
04.06 - 日志: xx
04.07 - 日志: xx
04.08 - 日志: xx
04.11 - 日志: xx
04.12 - 日志: xx
04.13 - 日志: xx
04.14 - 日志: xx
04.15 - 日志: xx
04.18 - 日志: xx
04.19 - 日志: xx
04.20 - 日志: xx
04.21 - 日志: xx
04.22 - 日志: xx
04.24 - 日志: xx
04.25 - 日志: xx
~~~
