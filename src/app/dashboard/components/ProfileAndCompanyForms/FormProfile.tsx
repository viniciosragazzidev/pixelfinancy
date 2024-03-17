"use client";
import React from "react";
import { MdPerson2 } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Defina o modelo Zod com base no modelo Profile fornecido
const profileSchema = z.object({
  name: z.string().min(2, { message: "Nome muito curto" }),
  surname: z.string().min(2, { message: "Sobrenome muito curto" }),
  email: z.string().email({ message: "Endereço de e-mail inválido" }),
  contact: z.string().min(1, { message: "Informe pelo menos um contato" }),
  address: z.string().min(2, { message: "Endereço muito curto" }),
  cep: z.string().min(8, { message: "CEP muito curto" }),
  city: z.string().min(2, { message: "Cidade muito curta" }),
  state: z.string().min(2, { message: "Estado muito curto" }),

  dateofbirth: z.string(),
  gender: z.string(),
});

const FormProfile = () => {
  // Use o React Hook Form com o Resolver do Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  // Função para lidar com o envio do formulário
  const onSubmit = (data: any) => {
    console.log(data); // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
  };

  return (
    <div className="flex w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 gap-y-10">
          {/* Input para o nome */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nome"
              {...register("name")}
            />
            {errors.name && errors.name.message && (
              <span className="subtitle_error">
                {errors.name.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o sobrenome */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              type="text"
              id="surname"
              placeholder="Sobrenome"
              {...register("surname")}
            />
            {errors.surname && errors.surname.message && (
              <span className="subtitle_error">
                {errors.surname.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o email */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && errors.email.message && (
              <span className="subtitle_error">
                {errors.email.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o contato */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="contact">Contato</Label>
            <Input
              type="text"
              id="contact"
              placeholder="Contato"
              {...register("contact")}
            />
            {errors.contact && errors.contact.message && (
              <span className="subtitle_error">
                {errors.contact.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o endereço */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="address">Endereço</Label>
            <Input
              type="text"
              id="address"
              placeholder="Endereço"
              {...register("address")}
            />
            {errors.address && errors.address.message && (
              <span className="subtitle_error">
                {errors.address.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o cep */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="cep">CEP</Label>
            <Input
              type="text"
              id="cep"
              placeholder="CEP"
              {...register("cep")}
            />
            {errors.cep && errors.cep.message && (
              <span className="subtitle_error">
                {errors.cep.message.toString()}
              </span>
            )}
          </div>

          {/* Input para a cidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="city">Cidade</Label>
            <Input
              type="text"
              id="city"
              placeholder="Cidade"
              {...register("city")}
            />
            {errors.city && errors.city.message && (
              <span className="subtitle_error">
                {errors.city.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o estado */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="state">Estado</Label>
            <Input
              type="text"
              id="state"
              placeholder="Estado"
              {...register("state")}
            />
            {errors.state && errors.state.message && (
              <span className="subtitle_error">
                {errors.state.message.toString()}
              </span>
            )}
          </div>

          {/* Input para a data de nascimento */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="dateofbirth">Data de Nascimento</Label>
            <Input
              type="text"
              id="dateofbirth"
              placeholder="Data de Nascimento"
              {...register("dateofbirth")}
            />
            {errors.dateofbirth && errors.dateofbirth.message && (
              <span className="subtitle_error">
                {errors.dateofbirth.message.toString()}
              </span>
            )}
          </div>

          {/* Input para o gênero */}
          <div className="grid w-full max-w-sm items-center gap-1.5 relative">
            <Label htmlFor="gender">Gênero</Label>
            <Input
              type="text"
              id="gender"
              placeholder="Gênero"
              {...register("gender")}
            />
            {errors.gender && errors.gender.message && (
              <span className="subtitle_error">
                {errors.gender.message.toString()}
              </span>
            )}
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="btn-primary mt-4 col-span-2 md:col-span-4"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
