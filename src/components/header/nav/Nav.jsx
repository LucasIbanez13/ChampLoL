import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Nav() {
  const [isRolesOpen, setIsRolesOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('All');

  const toggleRolesMenu = () => {
    setIsRolesOpen(!isRolesOpen);
  };

  const handleMouseEnter = () => {
    setIsRolesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsRolesOpen(false);
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion.json');
        const championsData = response.data.data;
        const rolesSet = new Set(['All']);
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
    // Aquí puedes implementar la lógica para filtrar los campeones por rol.
    // Puedes pasar el `selectedRole` a un estado global o a un componente superior para filtrar los campeones.
    setIsRolesOpen(false); // Cierra el menú después de seleccionar un rol
  };

  return (
    <nav className="text-white p-4 relative">
      <ul className="flex space-x-6">
        <li><a href="#inicio" className="text-lg font-semibold hover:text-gray-400 transition-colors">Inicio</a></li>
        <li 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a 
            href="#campeones" 
            className="text-lg font-semibold hover:text-gray-400 transition-colors"
          >
            Campeones
          </a>
          {isRolesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 text-white rounded shadow-lg z-50 flex">
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
        <li><a href="#favoritos" className="text-lg font-semibold hover:text-gray-400 transition-colors">Favoritos</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
