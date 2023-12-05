import {useState} from "react";
import { tw } from "@/ultis/tailwind-ultis";
import {SearchFieldDefault} from "@/components/Search/SearchField";
import { SearchButtonDefault } from "@/components/Search/SearchButton";

interface SearchProps {

}

export function SearchDefault({}: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>('');

    const search = () => {
        console.log("Search: ", searchValue);
    }

    return (
        <div className={tw(
            "flex flex-row justify-start gap-2"
        )}>
            <SearchFieldDefault setSearchValue={setSearchValue}/>
            <SearchButtonDefault submitSearch={search}>

            </SearchButtonDefault>
        </div>
    )
}