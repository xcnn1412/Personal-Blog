import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CategorySelect = () => {
  return (
    <div className="w-full space-y-2">
      {/* 1. เพิ่ม Label ด้านบน */}
      <Label htmlFor="category-select" className="text-stone-700">
        Category
      </Label>

      {/* 2. ส่วนของ Select Component */}
      <Select>
        <SelectTrigger id="category-select" className="w-full rounded-lg">
          <SelectValue placeholder="Highlight" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="highlight">Highlight</SelectItem>
          <SelectItem value="cat">Cat</SelectItem>
          <SelectItem value="inspiration">Inspiration</SelectItem>
          <SelectItem value="general">General</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelect;