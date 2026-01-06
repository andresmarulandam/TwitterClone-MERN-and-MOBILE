import Create from '../components/Create';
import Tweet from '../components/Tweet';

export default function Home() {
  const user = null;
  return (
    <>
      <h1 className="fs-4 m-2 fw-bolder">Home</h1>
      {user && <Create />}
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
}
