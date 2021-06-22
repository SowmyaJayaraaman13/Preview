import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const getDynamicComponent = (c) => dynamic(() => import(`../../src/components/${c}.tsx`), {
    ssr: false,
    loading: () => <h3 style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</h3>,
  });

function dynamicImport(){

    const router = useRouter();
    const query = router.query.dynamicImport
    const component = query + '-preview'

    const DynamicComponent = getDynamicComponent(component);

    return <DynamicComponent/>
    
}


export default dynamicImport



    

