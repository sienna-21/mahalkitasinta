import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="soft"
      size="sm"
      onClick={() => navigate('/gifts')}
      className="fixed top-6 left-6 z-50 gap-2 font-body"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to gifts
    </Button>
  );
};

export default BackButton;
