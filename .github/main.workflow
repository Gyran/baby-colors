workflow "Publish GH pages on push" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filter only master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  needs = "Filter only master"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = "Install"
}

action "Deploy" {
  uses = "gr2m/ghpages@master"
  needs = "Build"
  secrets = ["GITHUB_TOKEN"]
  env = {
    BUILD_DIR = "build/"
  }
}
