import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const RegistrationComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 5秒後に自動でログインページへ遷移
    const timer = setTimeout(() => {
      navigate('/admin/auth');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold">登録完了</CardTitle>
          <CardDescription>
            アカウントの登録が完了しました
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            TalentConnectへようこそ！<br />
            ログインして管理画面をご利用ください。
          </p>
          <p className="text-sm text-muted-foreground">
            5秒後に自動でログインページへ移動します...
          </p>
          <Button 
            onClick={() => navigate('/admin/auth')} 
            className="w-full"
          >
            今すぐログインページへ
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationComplete;
