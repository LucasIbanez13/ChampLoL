import React from 'react';

// Cambia la URL para obtener los datos en español
const API_URL = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/es_ES/champion.json';

function Nav({ setSelectedRole, setShowFavorites }) {
  const [isRolesOpen, setIsRolesOpen] = React.useState(false);
  const [roles, setRoles] = React.useState([]);

  const handleRoleClick = () => {
    setIsRolesOpen(!isRolesOpen);
  };

  React.useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const championsData = data.data;
        const rolesSet = new Set(['Todos']); // Asegúrate de que 'Todos' esté en español
        Object.values(championsData).forEach(champion => {
          champion.tags.forEach(tag => rolesSet.add(tag));
        });
        setRoles(Array.from(rolesSet));
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setIsRolesOpen(false);
  };

  const handleFavoritesClick = () => {
    setShowFavorites(true);
  };

  return (
    <nav className="text-white p-4 relative">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-lg font-semibold hover:text-gray-400 transition-colors">
            Inicio
          </a>
        </li>
        <li 
          className="relative"
          onClick={handleRoleClick}
        >
          <a 
            href="#campeones" 
            className="text-lg font-semibold hover:text-gray-400 transition-colors cursor-pointer"
          >
            Campeones
          </a>
          {isRolesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 text-white rounded shadow-lg z-50 flex flex-col">
              {roles.map((role) => (
                <div
                  key={role}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleRoleSelection(role)}
                >
                  {role}
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <a 
            href="#favoritos" 
            className="text-lg font-semibold hover:text-gray-400 transition-colors cursor-pointer"
            onClick={handleFavoritesClick}
          >
            Favoritos
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
