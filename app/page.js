

import Link from "next/link";
export default function MainPage(){
  return(
    <div style={{padding:"25px 0 0 25px"}}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px"}}>
        <li>
          <Link href="/week-2" className="underline hover:text-blue-500">Week 2 Page</Link>
        </li>
        <li>
          <Link href="/week-3" className="underline hover:text-blue-500">Week 3 Page</Link>
        </li>
        <li>
          <Link href="/week-4" className="underline hover:text-blue-500">Week 4 Page</Link>
        </li>
        <li>
          <Link href="/week-5" className="underline hover:text-blue-500">Week 5 Page</Link>
        </li>
        <li>
          <Link href="/week-6" className="underline hover:text-blue-500">Week 6 Page</Link>
        </li>
        <li>
          <Link href="/week-7" className="underline hover:text-blue-500">Week 7 Page</Link>
        </li>
        <li>
          <Link href="/week-8" className="underline hover:text-blue-500">Week 8 Page</Link>
        </li>
        <li>
          <Link href="/week-9" className="underline hover:text-blue-500">Week 9 Page</Link>
        </li>
      </ul>
    </div>
  );
}