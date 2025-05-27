import Link from 'next/link';
export default function StudentInfo() {
  return (
    <div>
      <h1>Samarbeer Singh <br />
      Student ID: 000938609
      </h1>
      <Link href="https://github.com/SamarBeer/cprg306-assignments" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </Link>
    </div>
  );
}


