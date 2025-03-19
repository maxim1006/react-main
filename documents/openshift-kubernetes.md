### сперва устанавливаю [oc cli](https://docs.openshift.com/container-platform/4.7/cli_reference/openshift_cli/getting-started-cli.html)

// логин (в правом верхнем углу в названии поды open login command)
команда скопированная из oc

// переход в проект
oc project svt-dmz

// вывод логов в vscode или в less
oc logs __pod-name__ | code -
oc logs __pod-name__ | less
