import Link from 'next/link';
export default function StudentInfo() {
  return (
    <main>
      <h1>Student Information</h1>
      <Link href="https://github.com/SamarBeer/cprg306-assignments" passHref>
        <a target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </Link>
    </main>
  );
}
