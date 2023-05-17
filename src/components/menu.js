import React, { useEffect, useState } from "react";
import { useLayer } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/menu.scss";

/**
 * * `type=="button"` -> `<button>`
 * * `type=="anchor"` -> `<a>`
 * @param {{
*      type: "button" | "anchor",
*      text: string,
*      selected: boolean | null,
*      ...props: any
* }} props
*/
export function MenuItem({type="button", text, selected=false, ...props}){
   const
       allProps = {
           "data-selected": selected? "" : undefined,
           className: "menu-item",
           ...props
       },
       child = <>{text}</>
   ;
   switch (type) {
       case "anchor":
           return <a {...allProps}>{child}</a>;
       case "button":
           return <button {...allProps}>{child}</button>;
        // no default
   }
   return <></>;
}

/**
 * @param {{
 *      open: boolean,
 *      setOpen: React.Dispatch<React.SetStateAction<boolean>> | null,
 *      children: React.ReactNode | null,
 *      className: string | null,
 *      placement: "bottom-start" | "bottom-end" | "bottom-center" | "top-start" | "top-center" | "top-end" | "left-end" | "left-center" | "left-start" | "right-end" | "right-center" | "right-start" | "center",
 *      childProps: any
 * }} props
 */
export default function Menu({
        open=false,
        setOpen,
        children,
        className,
        placement="bottom-center",
        childProps,
        ...props
    }) {
    const [isOpen, setIsOpen] = useState(false);

    function closePopupMenu(){
        setIsOpen(false);
    }

    function openPopupMenu(){
        setIsOpen(!isOpen);
        if (setOpen != null) setOpen(!isOpen);
    }

    const { renderLayer, triggerProps, layerProps } = useLayer({
        isOpen,
        onOutsideClick: closePopupMenu,
        overflowContainer: true,
        auto: true,
        placement: placement,
        triggerOffset: 12,
        containerOffset: 16,
        onParentClose: () => setIsOpen(false),
    });

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        const controller = new AbortController();
        document.addEventListener("scroll", () => { setIsOpen(false); }, { signal: controller.signal });
        return () => { controller.abort(); };
    }, []);

    return (<>
        <button
            {...triggerProps}
            {...childProps}
            data-open={isOpen? "" : undefined}
            onClick={openPopupMenu}>{ React.Children.toArray(children)[0] }</button>
        {renderLayer(
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        transition={{default: { ease: "linear", duration: 0.15 }}}
                        className={`menu ${className}`}
                        {...layerProps}>
                        { React.Children.toArray(children).slice(1) }
                    </motion.div>
                }
            </AnimatePresence>
        )}
    </>);
}