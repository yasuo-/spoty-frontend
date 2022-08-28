import React from "react";

import { useForm } from "react-hook-form";

import { ApplicationLayout } from "@/components/Layout/Application";

type FormData = {
  email: string;
  first_name: string;
  last_name: string;
  mobile_number: number;
  birthday: string;
  gender: number;
  postal_code: string;
  prefecture: number;
  city: string;
  address1: string;
};

const UserInfoInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);

  return (
    <ApplicationLayout>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="First name"
          {...register("first_name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("last_name", { required: true, maxLength: 100 })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobile_number", { required: true, maxLength: 12 })}
        />
        <input type="text" placeholder="birthday" {...register("birthday", { required: true })} />
        <select {...register("gender", { required: true })}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="9">9</option>
        </select>
        <input type="text" placeholder="postal_code" {...register("postal_code", { required: true })} />
        <select {...register("prefecture", { required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
        </select>
        <input type="text" placeholder="city" {...register("city", { required: true })} />
        <input type="text" placeholder="address1" {...register("address1", {})} />

        <input type="submit" />
      </form>
    </ApplicationLayout>
  );
};
