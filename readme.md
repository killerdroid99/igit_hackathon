# Student Blogging Website

Welcome to our Student Blogging Website Discurde! This platform allows students to share their thoughts, experiences, and knowledge through blog posts. We utilize GraphQL for efficient data querying, email and password authentication for secure user access, Express.js for server-side handling, Next.js for seamless rendering, and Tailwind CSS for stylish and responsive UI designs.

## Features

- **User Authentication**: Users can sign up and log in securely using their email and password.
- **Blog Creation**: Authenticated users can create, edit, and delete their blog posts.
- **GraphQL Integration**: Utilizes GraphQL for efficient data querying and manipulation.
- **Responsive Design**: Stylish and responsive UI designs are achieved with Tailwind CSS.
- **Server-Side Handling**: Utilizes Express.js for server-side handling to ensure smooth performance.

## Technologies Used

- **GraphQL**: Efficiently query and manipulate data.
- **Express.js**: Server-side handling for enhanced performance.
- **Next.js**: Renders pages seamlessly and efficiently.
- **Tailwind CSS**: Provides a customizable and responsive design system.
- **Email and Password Authentication**: Secure user access with email and password authentication.

## Getting Started

To get started with our Student Blogging Website, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

   ```bash
   git clone https://github.com/killerdroid99/igit_hackathon.git
   ```

2. **Install Dependencies**: Navigate into the cloned directory and install the necessary dependencies for client and server directories.

   ```bash
   cd student-blogging-website
   pnpm install
   ```

3. **Configure Databases**: Set up your Postgres and Redis database instances locally or using Docker.

4. **Configure Prisma**: Configure your postgres db by using `pnpx prisma db push` to reflect the models in `schema.prisma` file to your database instance.

5. **Set Up Environment Variables**: Set up your environment variables other configurations.

6. **Run the Application**: Start the development server.

   ```bash
   pnpm dev
   ```

7. **Explore**: Explore the website, sign up, create your blog posts, and enjoy sharing your thoughts with others!

## Contributing

We welcome contributions from everyone. If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
