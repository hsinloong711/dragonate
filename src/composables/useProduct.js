import { ref } from "vue";

const useProduct = (id) => {
  const error = ref(null);
  const isPending = ref(false);

  let data = await fetch("http://localhost:3000/products/" + id);
  data = JSON.stringify(product);

  const deleteDoc = async () => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await data.splice(index, 1);
      isPending.value = false
      return res;
    } catch(err) {
      console.log(err.message)
      isPending.value = false;
      error.value = "fail to delete"
    }
  };


  return { error, isPending, deleteDoc };
};

export default useProduct;
