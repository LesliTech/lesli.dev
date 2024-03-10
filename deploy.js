const { exec } = require("child_process");

exec("rm -rf build")
exec("npm run build")
exec("cd build")
exec("git init")
exec("git remote add origin git@github.com:LesliTech/lesli.dev.git")
exec("git add --all")
exec("git commit -m \"deploy {{ add date }}\"")
exec("git branch -m production")
exec("git push origin production --force")
