function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  if (email.includes(' ')) return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;
  if (!local || !domain) return false;
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;

  return true;
}

module.exports = { isValidEmail };
