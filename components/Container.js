import Footer from '@/components/Footer';
import Nav from '@/components/Nav'

export default function Container({children}) {
  return (
    <div>
      <Nav />
      <main className="flex flex-col justify-center px-8">
        {children}
        <Footer/>
      </main>
    </div>
  );
}
