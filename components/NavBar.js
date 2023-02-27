import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Devistry</a>
      </Link>

      <ul>
        <li>
          <Link href="/posts">
            <a>All posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
