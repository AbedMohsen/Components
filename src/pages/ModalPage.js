import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        tincidunt viverra purus quis semper. Morbi imperdiet massa cursus
        scelerisque dapibus. Donec condimentum metus vitae augue facilisis, eget
        porta tortor lacinia. Vivamus blandit ex nec magna scelerisque iaculis.
        Donec nec dui semper neque placerat tincidunt quis vitae turpis. Proin
        at fermentum felis. Etiam consequat tortor in dui pharetra, ut aliquet
        augue iaculis. Nullam posuere eget libero sed sollicitudin. Donec
        bibendum ornare sem, at placerat eros molestie sit amet.
      </p>
    </div>
  );
}

export default ModalPage;
