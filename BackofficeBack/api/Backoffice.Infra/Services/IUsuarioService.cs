﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Dtos;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Services
{
    public interface IUsuarioService
    {
        Task<IEnumerable<Usuario>> BuscarUsuariosAsync();

        Task<Usuario> BuscarUsuarioAsync(int id);

        Task<Usuario> InserirUsuarioAsync(Usuario usuario);

        Task<Usuario> AtualizarUsuarioAsync(Usuario usuario);

        Task ExcluirUsuarioAsync(Usuario usuario);

        Task<Usuario> BuscarUsuarioPorLoginESenhaAsync(string login, string senha);

        Task<Usuario> BuscarUsuarioPorLoginAsync(string login);

        Task<Usuario> AutenticarUsuarioAsync(UsuarioAutenticacaoDto usuarioAutenticacaoDto);

        Task<List<Usuario>> BuscarRedeUsuarioAsync(int geracao, int usuarioId);

        Task<string> CriptografarSenha(string senha);

    }
}
