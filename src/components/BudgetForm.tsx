import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  whatsapp: string;
  objective: string;
}

const BudgetForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message = `Olá! Me chamo ${data.name}, da empresa ${data.company}. 
    
Meu objetivo: ${data.objective}

Gostaria de solicitar um orçamento.`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para o WhatsApp...');
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          {...register('name', { required: 'Nome é obrigatório' })}
          placeholder="Seu nome"
          className="bg-surface/50"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Empresa</Label>
        <Input
          id="company"
          {...register('company', { required: 'Empresa é obrigatória' })}
          placeholder="Nome da sua empresa"
          className="bg-surface/50"
        />
        {errors.company && (
          <p className="text-sm text-destructive">{errors.company.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp">WhatsApp</Label>
        <Input
          id="whatsapp"
          {...register('whatsapp', { 
            required: 'WhatsApp é obrigatório',
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: 'WhatsApp inválido'
            }
          })}
          placeholder="11999999999"
          className="bg-surface/50"
        />
        {errors.whatsapp && (
          <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="objective">Objetivo do Projeto</Label>
        <Textarea
          id="objective"
          {...register('objective', { required: 'Descreva seu objetivo' })}
          placeholder="Descreva o que você precisa..."
          rows={4}
          className="bg-surface/50 resize-none"
        />
        {errors.objective && (
          <p className="text-sm text-destructive">{errors.objective.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full"
      >
        <Send size={18} className="mr-2" />
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </Button>
    </form>
  );
};

export default BudgetForm;
