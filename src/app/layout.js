import './scss/index.scss';


export const metadata = {
  title: 'deplace maison prismic',
  description: 'A project propulsed by Qalim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  ) 
}

