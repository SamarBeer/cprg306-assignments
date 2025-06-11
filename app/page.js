// import Link from 'next/link';

// export default function MainPage() {
//   return (
//     <div>
//       <h1>CPRG 306: Web Development 2 - Assignments</h1>
//       <Link href="/week-2">Week 2 Page</Link>
//     </div>
//   );
// }
// This is the main page of the application, linking to the Week 2 page.


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
      </ul>
    </div>
  );
}