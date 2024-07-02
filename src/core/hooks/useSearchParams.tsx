import { useSearchParams as up, usePathname, useRouter } from 'next/navigation';

export const useSearchParams = () => {

  const searchParams:any = up()
  const pathname = usePathname();
  const {replace} = useRouter();

  function updateSearchParam({key, value}: {
    key: string,
    value: string
  }): string {
    const params = new URLSearchParams(searchParams);
    if (value) {
        // set the search parameter if value is not empty
        params.set(key, value)
    } else {
        params.delete(key)
    }
    return `${pathname}?${params.toString()}`
}

function setSearchParam({key, value}: {
    key: string,
    value: string
}) {
    const newUrl = updateSearchParam({key, value})
    replace(newUrl)
}

return {
  setSearchParam
}


};