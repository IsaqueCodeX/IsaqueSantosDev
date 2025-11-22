import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DemoDentista = () => {
  return (
    <div className="min-h-screen">
      <Link
        to="/#portfolio"
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="lg"
          className="btn-gold shadow-2xl"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar ao Portfólio
        </Button>
      </Link>

      <iframe
        src="https://odonto-prime-lime.vercel.app"
        className="w-full h-screen border-0"
        title="Odonto Prime Demo"
      />
    </div>
  );
};

export default DemoDentista;
