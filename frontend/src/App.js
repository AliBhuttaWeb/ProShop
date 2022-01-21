import { Footer } from './partials/footer/footer.partial';
import { Header } from './partials/header/header.partial';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Siedbar } from './components/dashboard_components/sidebar/sidebar.component';
import { AdminRoutes } from './routes/admin.routes';
import { EndUserRoutes } from './routes/enduser.routes';

export const App = () => {
  
  const navigate = useNavigate();
  const [uri, setUri] = useState(null);
  const [isAdminUri, setSsAdminUri] = useState(false);

  useEffect( () => {
    const path = window.location.pathname;
    setUri(path);
    setSsAdminUri(path.includes('admin'));
  }, [navigate]);

  return (
    <>
      <ToastContainer />

      { 
          isAdminUri 
            ? (uri ==="/admin/login" 
                ? <Container className='content py-3' >
                      <Row>
                        <AdminRoutes />
                      </Row>
                  </Container>
                : <Container className='content py-3' >
                      <Row>
                        <Siedbar />
                        <AdminRoutes />
                      </Row>
                  </Container>)
            : (<>
                <Header />
                <Container className="content py-3">
                  <EndUserRoutes />
                </Container>
              </>)
      }

      { isAdminUri && uri ==="/admin/login" ? '' : <Footer /> }
    </>
  );
}