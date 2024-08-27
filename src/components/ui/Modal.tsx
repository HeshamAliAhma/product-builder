import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
    isOpen: boolean;
    close: () => void;
    title?: string;
    children: ReactNode;
}

const MyModal = ({ isOpen, close, title, children }: IProps) => {
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <DialogBackdrop className="fixed backdrop-blur-sm inset-0 bg-black/30" aria-hidden='true' />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        className="w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        {title && (
                            <DialogTitle as="h2" className="text-2xl font-bold text-black">
                                {title}
                            </DialogTitle>
                        )}
                        <div className="mt-4">
                            {children}
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default MyModal;
