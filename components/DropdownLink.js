import Link from 'next/link';
import React from 'react';

export default function DropdownLink({ href, children, ...rest }) {
  return (
    <Link href={href}>
      <span {...rest}>{children}</span>
    </Link>
  );
}
