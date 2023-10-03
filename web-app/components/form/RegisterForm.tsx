"use client"
import * as React from 'react';
import Image from 'next/image'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import Modal from '@mui/material/Modal';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material';


const categories = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const


const group_sizes = [
  { label: "Cow", value: "cw" },
  { label: "Rat", value: "rt" },
  { label: "Monkey", value: "mk" },
  { label: "Goat", value: "gt" },
  { label: "Bird", value: "bd" },
  { label: "Cat", value: "ct" },
  { label: "Snake", value: "sk" },
  { label: "Lion", value: "ln" },
  { label: "Tiger", value: "tg" },
] as const

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FormSchema = z.object({

  teamname:z.string().min(1,'username is required').max(100),
  email:z.string().min(1,"Email is required").email('Invalid email'), 
  phonenumber:z.string().min(1,"Phonenumber is required")
  .min(11,'phonenumber must be up to 11'),
  project_topic:z.string().min(1,'project topic is required').max(100),
  category: z.string({
    required_error: "Please select a language.",
  }),
  group_size: z.string({
    required_error: "Please select a language.",
  }),
})


const RegisterForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
        teamname:'',
        email:'',
        phonenumber:'',
        group_size:"",
        project_topic:"",
    }
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);// State for controlling the modal

  const onSubmit=(values:z.infer<typeof FormSchema>)=>{
    console.log(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
    handleOpen()
  }

  return (
    <div className="flex pt-28">
      {/* Image */}
      <div className="w-1/2 p-8">
        <Image
          src={'/man-sitting.png'}
          width={717}
          height={717}
          alt='img'
          className='mx-auto'
        />
      </div>
  
      {/* Form */}
      <div className="bg-purple-300 bg-opacity-10 rounded-[12px] p-14 w-[740px] h-[740px] mb-20 mt-20 mr-10">
        <h1 className='text-4xl text-purple-600 font-bold'>Register</h1>
        <br />
        <p className='text-md'>Be part of this movement! <span className='text-2xl text-purple-600'>....🚶‍♀️🚶‍♂️.....</span></p>
        <br />
        <h1 className='text-2xl'>CREATE YOUR ACCOUNT</h1>
        <br />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4 gap-4">
              {/* First Pair of Form Fields */}
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="teamname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teamname</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john doe"
                          {...field}
                          type="name"
                          className="border rounded p-2 focus:ring focus:border-blue-500 w-[263px]
                          h-[47px]"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the name of your group
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter email"
                          {...field}
                          type="email"
                          className="border rounded p-2 focus:ring focus:border-blue-500 w-[263px]
                          h-[47px]"
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
  
            <div className="flex space-x-4 gap-4">
              {/* Second Pair of Form Fields */}
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="project_topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Topic</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is your project topic"
                          {...field}
                          type="text"
                          className="border rounded p-2 focus:ring focus:border-blue-500 w-[263px]
                          h-[47px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phonenumber</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your number"
                          {...field}
                          type="number"
                          className="border rounded p-2 focus:ring focus:border-blue-500 w-[263px]
                          h-[47px]"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your phone number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
  
            <div className="flex space-x-4 gap-4">
              {/* Third Pair of Form Fields */}
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Category</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className="justify-between bg-none outline  w-[263px]
                              h-[47px]"
                            >
                              {field.value
                                ? categories.find(
                                    (category) => category.value === field.value
                                  )?.label
                                : "Select category"}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        {/* ... PopoverContent and options */}
                        <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandEmpty>No categories found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          value={category.label}
                          key={category.value}
                          onSelect={() => {
                            form.setValue("category", category.value)
                          }}
                        >
                          {category.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              category.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>

                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                 <FormField
  control={form.control}
  name="group_size"
  render={({ field }) => (
    <FormItem className="flex flex-col">
      <FormLabel>Group Size</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className="justify-between bg-none outline w-[263px] h-[47px]"
            >
              {field.value
                ? group_sizes.find(
                    (group_size) => group_size.value === field.value
                  )?.label
                : "Select Group size"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        
          {/* Popover Content for Group Size */}
          <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search size..."
              className="h-9"
            />
            <CommandEmpty>No size found.</CommandEmpty>
            <CommandGroup>
              {group_sizes.map((group_size) => (
                <CommandItem
                  value={group_size.label}
                  key={group_size.value}
                  onSelect={() => {
                    form.setValue("group_size", group_size.value)
                  }}
                >
                  {group_size.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      group_size.value === field.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
          </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )}
/>
  </div>
  </div>
    <br />
    <br />
    <br />
    
    <Button
     type="submit"
      className="w-[558px] h-[53px] bg-gradient-to-r from-[#f034c2] via-[#c137e0] to-[#d434fe] text-white py-2 px-4 text-md "
      onClick={handleOpen}
      >
      Register Now
      </Button>
          </form>
        </Form>
      </div>
      {/* Render the modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-black'>
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-black'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
  
  
}

export default RegisterForm