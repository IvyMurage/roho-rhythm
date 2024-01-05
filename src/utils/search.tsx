// import { NextRouter } from "next/router";

// type SearchChangeType = {
//     (event: React.ChangeEvent<HTMLInputElement>, createQueryString: (name: string, value: string) => string, router: NextRouter): void;
//   };
// }
// export const handleSearchChange: React.ChangeEventHandler<HTMLInputElement | SearchChangeType> = (event: React.ChangeEvent<HTMLInputElement>, createQueryString, router, pathname) => {
//     event.preventDefault();
//     const searchParams = createQueryString('search', event.target.value.trim());
//     router.push(`${pathname}?${searchParams}`);
//   }