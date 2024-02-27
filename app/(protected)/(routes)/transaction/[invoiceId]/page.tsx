import MidLayout from "@/components/own/MidLayout";
import CardInvoice from "./components/CardInvoice";
import { Info } from "lucide-react";
import prismadb from "@/lib/prismadb";

const InvoicePage = async () => {
  const ticket = await prismadb.ticket.findMany();

  return (
    <MidLayout className="space-y-8">
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
      <CardInvoice>
        <div className="flex w-full flex-col justify-between gap-2 rounded-xl bg-orange-100 px-3 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200">
              <Info className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-sm text-gray-800">Segera lakukan pembayaran</h3>
          </div>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            No Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">#WZOK871664HHH1</p>
        </div>
        <div className="mt-3 grid w-full grid-cols-8 items-center gap-2">
          <h3 className="text-sm font-light text-gray-500">
            Waktu Transaksi <span>:</span>
          </h3>
          <p className="col-span-3">17 Januari 2024, 13.53 WIB</p>
        </div>
      </CardInvoice>
    </MidLayout>
  );
};

export default InvoicePage;
