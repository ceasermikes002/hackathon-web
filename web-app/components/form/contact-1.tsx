import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Button as UIButton } from "../ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from "@/components/ui/textarea";

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
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, "Email is required").email('Invalid email'),
  message: z.string().min(1, "Message is required")
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    }
  });

  const [isModalOpen, setModalOpen] = React.useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    handleOpenModal();
  }

  return (
    <div className="flex justify-center items-center p-20">
      {/* Right side content */}
      <div className="w-1/2 pl-8">
        <Image
          src={'/sata-gra.png'}
          width={20}
          height={20}
          alt='img'
        />
        <h3 className='text-3xl font-bold text-purple-600'>Get in touch</h3>
        <p>Contact Information</p>
        {/* Add your existing content here */}
        <br />
        <p>27, Alara Street <br />
          Yaba 100012 <br />
          Lagos State</p>
        <br />
        <p>Call Us: 07067981819</p>
        <br />
        <p>We are open from Monday-Friday <br />
          08:00 am - 05:00 pm</p>
        <br />
        <p className='text-purple-600 font-bold text-lg'>Share on</p>
        <br />
        <div className='flex flex-row gap-3'>
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>

      {/* Left side content */}
      <div className="w-1/2 pr-8">
        <div className="bg-purple-300 bg-opacity-10 p-8 rounded-md flex flex-col items-center justify-center h-full">
          <div className="space-y-2 w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} type="name" className="bg-none text-white" />
                      </FormControl>
                      <FormDescription>
                        This is your public username
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" {...field} type="email" className="bg-none text-white" />
                      </FormControl>
                      <FormDescription>
                        This is your public email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize bg-none text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center"> {/* Center the button horizontally */}
                  <UIButton type="submit" variant="outline"
                    className="w-48 h-12 bg-gradient-to-r from-[#f034c2] via-[#c137e0] to-[#d434fe] "
                    size="default">
                    Submit
                  </UIButton>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image
            src={'/thumbs-up.png'} // Replace with the path to your image
            width={200}
            height={200}
            alt='Image Alt Text'
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>
          <Typography id="modal-modal-description" className='text-black font-bold text-lg' sx={{ mt: 2 }}>
            Thank you for submitting the form!
          </Typography>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Contact;
