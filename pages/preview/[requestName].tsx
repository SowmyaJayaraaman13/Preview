import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const getDynamicComponent = (c) => dynamic(() => import(`../../src/components/${c}`), {
    ssr: false,
    loading: () => <h3 style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</h3>,
  });

function RequestName(){
    const router = useRouter();
    const query = router.query.requestName
    const component = query + '-preview'

    const DynamicComponent = getDynamicComponent(component);
    return <DynamicComponent />
  
}

export default RequestName;





