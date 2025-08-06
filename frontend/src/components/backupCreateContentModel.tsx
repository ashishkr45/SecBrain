import { useState } from "react";
import { CrossIcon, AddIcon, ChevronDownIcon } from "../icons/Icons";
import { Button } from "./ui/button";
import { z } from "zod";

// Your content types enum
export const contentTypes = z.enum([
  "link",
  "code",
  "note",
  "quote",
  "event",
  "bookmark",
]);

type ContentType = z.infer<typeof contentTypes>;

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
	type: ContentType;
	title: string;
	link: string | null;
	note: string | null;
	tags: string[];
  }) => void;
}

export function CreateContentModelBackup({ open, onClose, onSubmit }: CreateContentModelProps) {
  const [selectedType, setSelectedType] = useState<ContentType | "">("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  // Pastel colors for tags
  const pastelColors = [
	"bg-pink-100 text-pink-700 border-pink-200",
	"bg-blue-100 text-blue-700 border-blue-200", 
	"bg-green-100 text-green-700 border-green-200",
	"bg-yellow-100 text-yellow-700 border-yellow-200",
	"bg-purple-100 text-purple-700 border-purple-200",
	"bg-indigo-100 text-indigo-700 border-indigo-200",
	"bg-red-100 text-red-700 border-red-200",
	"bg-orange-100 text-orange-700 border-orange-200",
	"bg-teal-100 text-teal-700 border-teal-200",
	"bg-cyan-100 text-cyan-700 border-cyan-200"
  ];

  const getTagColor = (index: number) => {
	return pastelColors[index % pastelColors.length];
  };

  const handleSubmit = () => {
	const newErrors: string[] = [];

	if (!selectedType) {
	  newErrors.push("Please select a content type");
	}
	if (!title.trim()) {
	  newErrors.push("Please enter a title");
	}
	if(selectedType === "link") {
	  if (!link.trim()) {
		newErrors.push("Please enter a link");
	  }
	}
	if(selectedType && selectedType != "link") {
	  if (!note.trim()) {
		newErrors.push("Please enter you note");
	  }
	}
	if (newErrors.length > 0) {
	  setErrors(newErrors);
	  return;
	}

	setErrors([]);
	onSubmit?.({
	  type: selectedType as ContentType,
	  title: title.trim(),
	  link: link? link.trim() : null,
	  note: note? note.trim() : null,
	  tags: tags.filter(tag => tag.trim() !== "")
	});

	// Reset form
	setSelectedType("");
	setTitle("");
	setLink("");
	setNote("");
	setTags([]);
	setCurrentTag("");
	onClose();
  };

  const addTag = () => {
	if (currentTag.trim() && !tags.includes(currentTag.trim())) {
	  setTags([...tags, currentTag.trim()]);
	  setCurrentTag("");
	}
  };

  const removeTag = (tagToRemove: string) => {
	setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
	if (e.key === 'Enter') {
	  e.preventDefault();
	  addTag();
	}
  };

  // Format type names for display
  const formatTypeName = (type: string) => {
	return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
	<div>
	  {open && (
		<div 
		  className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-10"
		  onClick={onClose}
		>
		  <div 
			className="bg-white p-6 rounded-xl shadow-lg z-20 min-w-lg max-w-xl"
			onClick={(e) => e.stopPropagation()}
		  >
			<div className="flex justify-between items-center mb-4">
			  <h2 className="text-lg font-semibold">Create Content</h2>
			  <button onClick={onClose}>
				<CrossIcon size="md" />
			  </button>
			</div>

			<div className="space-y-4">
			  {/* Content Type Dropdown */}
			  <div>
				<label className="block text-sm font-medium mb-1">Content Type *</label>
				<Dropdown
				  value={selectedType}
				  onChange={setSelectedType}
				  options={contentTypes.options.map(type => ({
					value: type,
					label: formatTypeName(type)
				  }))}
				  placeholder="Select content type"
				/>
			  </div>
			  
			  {selectedType === "link" && (
				<>
				  {/* Link Input */}
				  <div>
					<label className="block text-sm font-medium mb-0.5">Link</label>
					<Input 
					  placeholder="Enter link" 
					  value={link}
					  onChange={(value) => setLink(value)} 
					/>
				  </div>
				</>
			  )}

			  {/* for the rest of the types */}
			  {selectedType && selectedType !== "link" && (
				<>
				  <div>
					<label className="block text-sm font-medium mb-0.5">Note</label>
					<textarea
					  placeholder="Enter note here..."
					  value={note}
					  onChange={(e) => setNote(e.target.value)}
					  className="w-full border p-2 rounded-md min-h-[100px] resize-y"
					/>
				  </div>
				</>
			  )}

			  {/* Title Input */}
			  <div>
				<label className="block text-sm font-medium mb-0.5">Title *</label>
				<Input 
				  placeholder="Enter title" 
				  value={title}
				  onChange={(value) => setTitle(value)} 
				/>
			  </div>

			  {/* add the was to add content */}

			  {/* Tags Input */}
			  <div>
				<label className="block text-sm font-medium mb-0.5">Tags</label>
				<div className="flex gap-2 mb-2">
				  <Input 
					placeholder="Add tag" 
					value={currentTag}
					onChange={(value) => setCurrentTag(value)}
					onKeyPress={handleKeyPress}
				  />
				  <Button
					variant="secondary"
					size="sm"
					innerText="Add"
					onClick={addTag}
				  />
				</div>
				
				{/* Display Tags */}
				{tags.length > 0 && (
				  <div className="flex flex-wrap gap-2">
					{tags.map((tag, index) => (
					  <span 
						key={index}
						className={`${getTagColor(index)} px-3 py-1 rounded-full text-sm border flex items-center gap-2 font-medium`}
					  >
						<span className="truncate max-w-[200px]" title={tag}>
						  {tag}
						</span>
						<button 
						  onClick={() => removeTag(tag)}
						  className="hover:opacity-70 font-bold text-lg leading-none"
						>
						  ×
						</button>
					  </span>
					))}
				  </div>
				)}
			  </div>

			  <div className="flex justify-center mt-6">
				<Button
				  variant="primary"
				  size="sm"
				  innerText="Create Content"
				  icon={<AddIcon size='md' color="#fff"/>}
				  onClick={handleSubmit}
				/>
			  </div>

			  {/* Error Messages */}
			  {errors.length > 0 && (
				<div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
				  <div className="text-red-600 text-sm space-y-1">
					{errors.map((error, index) => (
					  <div key={index} className="flex items-center gap-2">
						<span className="text-red-500">•</span>
						{error}
					  </div>
					))}
				  </div>
				</div>
			  )}
			</div>
		  </div>
		</div>
	  )}
	</div>
  );
}

// Enhanced Input component
interface InputProps {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

function Input({ onChange, placeholder, value, onKeyPress }: InputProps) {
  return (
	<input
	  type="text"
	  placeholder={placeholder}
	  value={value}
	  onChange={(e) => onChange(e.target.value)}
	  onKeyPress={onKeyPress}
	  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
	/>
  );
}

// Dropdown component
interface DropdownProps<T = string> {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  placeholder: string;
}

function Dropdown<T extends string>({ value, onChange, options, placeholder }: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
	<div className="relative">
	  <button
		type="button"
		onClick={() => setIsOpen(!isOpen)}
		className="w-full px-4 py-2 border rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
	  >
		<span className={value ? "text-gray-900" : "text-gray-500"}>
		  {value ? options.find(opt => opt.value === value)?.label : placeholder}
		</span>
		<ChevronDownIcon size="sm" />
	  </button>

	  {isOpen && (
		<div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
		  {options.map((option) => (
			<button
			  key={option.value}
			  type="button"
			  onClick={() => {
				onChange(option.value);
				setIsOpen(false);
			  }}
			  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
			>
			  {option.label}
			</button>
		  ))}
		</div>
	  )}
	</div>
  );
}