import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import { useGetUsers } from "@/hooks/useGetUsers";
import { Header } from "@/components/Header";
import { apiClient, ApiResponse } from "@/services/api";

export function Home() {
  const { users: data, fetchUsers: getUsers, loading } = useGetUsers();

  const onDeleteUser = async (id: string) => {
    if (
      window.confirm("Are you sure that you wanted to delete that user record")
    ) {
      const response = await apiClient
        .getAxiosInstance()
        .delete<ApiResponse>(`/users/${id}`);
      if (response.status === 200 && response.data.success) {
        toast.success(response.data.success);
        getUsers();
        return;
      }

      toast.error("Something went wrong!");
      return;
    }

    toast.info("User record is safe!");
    return;
  };

  return (
    <Header>
      <div className="home-container">
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Id.</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Contato</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5}>
                    <h2>Loading...</h2>
                  </td>
                </tr>
              )}
              {!loading &&
                data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>
                        <div className="table-actions">
                          <Link to={`/update/${item.id}`}>
                            <button className="btn btn-edit">Editar</button>
                          </Link>
                          <button
                            className="btn btn-delete"
                            onClick={() => onDeleteUser(item.id)}
                          >
                            Deletar
                          </button>
                          <Link to={`/view/${item.id}`}>
                            <button className="btn btn-view">Verificar</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Header>
  );
}
