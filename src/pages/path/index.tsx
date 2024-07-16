import type {ReactElement} from 'react';
import { MainLayout } from '@/shared/layout';
import { PathPageComponent } from '@/widgets/auth';

const PathPage = () => {
    return (
      <PathPageComponent />
    );
  };
  
  PathPage.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout hideNavbar>{page}</MainLayout>;
  };
  
  export default PathPage;