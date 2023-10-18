import dynamic from 'next/dynamic';

const DraggableImage = dynamic(() => import('./DraggableImage'), {
  ssr: false,  // Asegura que solo se cargue en el cliente
  loading: () => <p>Loading...</p>  // Puedes proporcionar un componente de carga si lo deseas
});

export default DraggableImage;