import Logo from '../images/logo.png';
import Searchbar from './Searchbar';

function Nav() {
    return (
      <div>
        <nav className="bg-[#1dd760]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
                <Searchbar />
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 mt-4"
                    src={Logo}
                    alt="Spotify logo"
                  />


                </div>

              </div>
            </div>
          </div>
          
  
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            </div>
          </div>
        </nav>
  


      </div>
    );
  }
  export default Nav;