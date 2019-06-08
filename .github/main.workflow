workflow "Publish GH pages on push" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run deploy"
  needs = "Install"
  secrets = ["GITHUB_TOKEN"]
  env = {
    GIT_AUTHOR_NAME = "Gustav Ahlberg"
    GIT_AUTHOR_EMAIL = "Gustav.Ahlberg@gmail.com"
  }
}
