async function Avatars(names = "M+D") {
  const url = `https://ui-avatars.com/api/?name=${names}`;
  return { url };
}

export default Avatars;
