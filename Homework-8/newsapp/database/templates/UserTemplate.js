function UserTemplate(data = {}) {
  const {
    userId = String(Date.now()),
    username, password, email,
    facebookId = '',
  } = data;
  this.userId = userId;
  this.username = username;
  this.password = password;
  this.email = email;
  this.facebookId = facebookId;
}

module.exports = UserTemplate;
