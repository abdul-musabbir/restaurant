function page({ params }) {
  let { slug } = params;
  return <div>{slug}</div>;
}

export default page;
