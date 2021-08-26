// node_modules imports
import React, { useState, useContext} from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable as arrayMove } from "array-move";

// my imports
import FullItem from '../Item/Item';
import Surface from '../Surface/Surface';
import { ColorsContext } from '../../views/NewPallete';


const SortableItem = SortableElement(({color, id}) => {
  return <FullItem bgC={color.colorValue} cC={color.colorValue} id={id} />
});


const SortableList = SortableContainer(({ colors }) => {
  return (
    <Surface>
      {colors.map((color, index) => (
        <SortableItem key={`${color.name}__${color.colorValue}`} index={index} color={color} id={`${color.name}__${color.colorValue}`} />
      ))}
    </Surface>
  );
});

 const onSortStart = () => document.body.style.cursor = 'grabbing';

function Sortable(){

    const {colors, setColors} = useContext(ColorsContext);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        document.body.style.cursor = 'default';
        setColors(( colors ) => arrayMove(colors, oldIndex, newIndex));

  };


    return (
      <div>
        <SortableList
          axis="xy"
          colors={colors}
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
        />
      </div>
    );
  }


export default Sortable;

