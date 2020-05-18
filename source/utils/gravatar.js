import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  // const formattedEmail = email.trim().toLowerCase();
  const formattedEmail = email.replace(/ /g, '').toLowerCase();
  // Encriptamos el email y configuramos la codificación (para no enviar @)
  const hash = md5(formattedEmail, { encoding: 'binary' });

  return `${base}${hash}`;
};

export default gravatar;
