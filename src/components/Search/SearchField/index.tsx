import {InputProps, Input} from "@nextui-org/input";
import {SearchIconDefault} from "@/components/Search/SearchIcon";

interface SearchFieldProps {
    setSearchValue: (value: string) => void;
}

export function SearchFieldDefault({
    setSearchValue
}: SearchFieldProps) {
    return (
        <Input
            classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIconDefault size={18} />}
            type="search"
            onChange={(e)=> {
                setSearchValue(e.target.value);
            }}
        />
    )
}