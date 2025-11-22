import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from './Home';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
